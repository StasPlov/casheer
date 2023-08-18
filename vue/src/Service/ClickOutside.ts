const HANDLERS_PROPERTY = "__v-click-outside";
const HAS_WINDOWS = typeof window !== "undefined";
const HAS_NAVIGATOR = typeof navigator !== "undefined";
const IS_TOUCH = HAS_WINDOWS && ("ontouchstart" in window || (HAS_NAVIGATOR && navigator.maxTouchPoints > 0));
const EVENTS = IS_TOUCH ? ["touchstart"] : ["click"];

const processDirectiveArguments = (bindingValue: any) => {
	const isFunction = typeof bindingValue === "function";

	if (!isFunction && typeof bindingValue !== "object") {
		throw new Error("v-click-outside: Binding value must be a function or an object");
	}

	return {
		handler: isFunction ? bindingValue : bindingValue.handler,
		middleware: bindingValue.middleware || ((item: any) => item),
		events: bindingValue.events || EVENTS,
		isActive: !(bindingValue.isActive === false),
		detectIframe: !(bindingValue.detectIframe === false),
		capture: Boolean(bindingValue.capture),
	};
};

const execHandler = ({ event, handler, middleware }: any) => {
	if (middleware(event)) {
		handler(event);
	}
};

const onFauxIframeClick = ({ el, event, handler, middleware }: any) => {
	setTimeout(() => {
		const { activeElement } = document;
		if (
			activeElement &&
			activeElement.tagName === "IFRAME" &&
			!el.contains(activeElement)
		) {
			execHandler({ event, handler, middleware });
		}
	}, 0);
};

const onEvent = ({ el, event, handler, middleware }: any) => {
	const path = event.path || (event.composedPath && event.composedPath());
	const isClickOutside = path
		? path.indexOf(el) < 0
		: !el.contains(event.target);
	if (!isClickOutside) {
		return;
	}
	execHandler({ event, handler, middleware });
};

const beforeMount = (el: { [x: string]: any; }, { value }: { value: any; }) => {
	const {
		events,
		handler,
		middleware,
		isActive,
		detectIframe,
		capture,
	} = processDirectiveArguments(value);

	if (!isActive) {
		return;
	}

	el[HANDLERS_PROPERTY] = events.map((eventName: any) => ({
		event: eventName,
		srcTarget: document.documentElement,
		handler: (event: any) => onEvent({ el, event, handler, middleware }),
		capture,
	}));

	if (detectIframe) {
		const detectIframeEvent = {
			event: "blur",
			srcTarget: window,
			handler: (event: any) => onFauxIframeClick({ el, event, handler, middleware }),
			capture,
		};
		el[HANDLERS_PROPERTY] = [...el[HANDLERS_PROPERTY], detectIframeEvent];
	}

	el[HANDLERS_PROPERTY].forEach(({ event, srcTarget, handler: thisHandler }: any) =>
		setTimeout(() => {
			if (!el[HANDLERS_PROPERTY]) {
				return;
			}
			srcTarget.addEventListener(event, thisHandler, capture);
		}, 0)
	);
};

const unmounted = (el: { [x: string]: any; }) => {
	const handlers = el[HANDLERS_PROPERTY] || [];
	handlers.forEach(({ event, srcTarget, handler, capture }: any) =>
		srcTarget.removeEventListener(event, handler, capture)
	);
	delete el[HANDLERS_PROPERTY];
};

const updated = (el: any, { value, oldValue }: any) => {
	if (JSON.stringify(value) === JSON.stringify(oldValue)) {
		return;
	}

	unmounted(el);
	beforeMount(el, { value });
};

const directive = {
	beforeMount,
	updated,
	unmounted,
};

export default HAS_WINDOWS ? directive : {};
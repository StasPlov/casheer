const FULL_ANGLE = 360;
const STRAIGHT_ANGLE = 180;
const GAMMA_TO_LINEAR = 2.2;
const LINEAR_TO_GAMMA = 0.45454545;
const IS_INTEGER = 0.5;
const EPSILON = Math.pow(2, -52);
const RANDOM_SEED = 0.8694896071683615;

class Mathf {
	static Deg2Rad: number = (Math.PI * 2) / FULL_ANGLE;
	static Epsilon: number = Number.EPSILON || EPSILON;
	static NegativeInfinity: number = -Infinity;
	static Rad2Deg: number = FULL_ANGLE / (Math.PI * 2);

	/**
	 * Compares two floating point values if they are similar
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.Approximately.html
	 * @param f1
	 * @param f2
	 * @returns {boolean}
	 */
	static approximately(f1: number, f2: number): boolean {
		return Math.abs(f1 - f2) < this.Epsilon;
	}

	/**
	 * Clamps a value between a minimum float and maximum float value
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.Clamp.html
	 * @param value
	 * @param min
	 * @param max
	 * @returns {number}
	 */
	static clamp(value: number, min: number, max: number): number {
		return value < min ? min : (value > max ? max : value);
	}

	/**
	 * Clamps value between 0 and 1 and returns value
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.Clamp01.html
	 * @param value
	 * @returns {number}
	 */
	static clamp01(value: number): number {
		return value < 0 ? 0 : (value > 1 ? 1 : value);
	}

	/**
	 * Returns the closest power of two value
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.ClosestPowerOfTwo.html
	 * @param value
	 * @returns {number}
	 */
	static closestPowerOfTwo(value: number): number {
		let nextPowerOfTwo = this.nextPowerOfTwo(value);

		// if value is between nextPowerOfTwo and pre-pre nextPowerOfTwo
		if (nextPowerOfTwo - value > nextPowerOfTwo >> 2) {
			// prev power of two
			return nextPowerOfTwo >> 1;
		}

		return nextPowerOfTwo;
	}

	/**
	 * Returns the closest power of two long value (useful for more then 32 bit numbers)
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.ClosestPowerOfTwo.html
	 * @param value
	 * @returns {number}
	 */
	static closestPowerOfTwoLong(value: number): number {
		if (value < 0) return 0;

		// algorithm to find next power of two for long integers
		let nextPowerOfTwo = 2 << Math.floor(Math.log2(value));

		// if value is between nextPowerOfTwo and pre-pre nextPowerOfTwo
		if (nextPowerOfTwo - value > nextPowerOfTwo >> 2) {
			// prev power of two
			return nextPowerOfTwo >> 1;
		}

		return nextPowerOfTwo;
	}

	/**
	 * Calculates the shortest difference between two given angles given in degrees
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.DeltaAngle.html
	 * @param current
	 * @param target
	 * @returns {number}
	 */
	static deltaAngle(current: number, target: number): number {
		if (Math.abs(current) > FULL_ANGLE) {
			current %= FULL_ANGLE;
		}

		if (Math.abs(target) > FULL_ANGLE) {
			target %= FULL_ANGLE;
		}

		return target - current;
	}

	/**
	 * Converts the given value from gamma (sRGB) to linear color space
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.GammaToLinearSpace.html
	 * @param value
	 * @returns {number}
	 */
	static gammaToLinearSpace(value: number): number {
		return Math.pow(value, GAMMA_TO_LINEAR);
	}

	/**
	 * Calculates the linear parameter t that produces the interpolant value within the range [a, b]
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.InverseLerp.html
	 * @param a
	 * @param b
	 * @param value
	 * @returns {number}
	 */
	static inverseLerp(a: number, b: number, value: number): number {
		return (this.clamp(value, Math.min(a, b), Math.max(a, b)) - a) / (b - a);
	}

	/**
	 * Returns true if the value is power of two
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.IsPowerOfTwo.html
	 * @link http://stackoverflow.com/a/108360
	 * @param value
	 * @returns {boolean}
	 */
	static isPowerOfTwo(value: number): boolean {
		return (value & (value - 1)) === 0;
	}

	/**
	 * Linearly interpolates between a and b by t
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.Lerp.html
	 * @param a
	 * @param b
	 * @param t
	 * @returns {number}
	 */
	static lerp(a: number, b: number, t: number): number {
		return (b - a) * this.clamp01(t) + a;
	}

	/**
	 * Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.LerpAngle.html
	 * @param a
	 * @param b
	 * @param t
	 * @returns {number}
	 */
	static lerpAngle(a: number, b: number, t: number): number {
		while (a > b + STRAIGHT_ANGLE) {
			b += FULL_ANGLE;
		}

		while (b > a + STRAIGHT_ANGLE) {
			b -= FULL_ANGLE;
		}

		return this.lerp(a, b, t);
	}

	/**
	 * Linearly interpolates between a and b by t
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.LerpUnclamped.html
	 * @param a
	 * @param b
	 * @param t
	 * @returns {number}
	 */
	static lerpUnclamped(a: number, b: number, t: number): number {
		if (t < 0 || t > 1) {
			return a + Math.abs(b - a) * t;
		}

		return (b - a) * this.clamp01(t) + a;
	}

	/**
	 * Converts the given value from linear to gamma (sRGB) color space
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.LinearToGammaSpace.html
	 * @param value
	 * @returns {number}
	 */
	static linearToGammaSpace(value: number): number {
		return Math.pow(value, LINEAR_TO_GAMMA);
	}

	/**
	 * Moves a value current towards target
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.MoveTowards.html
	 * @param current
	 * @param target
	 * @param maxDelta
	 * @returns {number}
	 */
	static moveTowards(current: number, target: number, maxDelta: number): number {
		if (maxDelta > 0) {
			if (target < current && current - maxDelta < target) return target;
			else if (target > current && current + maxDelta > target) return target
		}

		if (current > target) {
			return current - maxDelta;
		}

		return current + maxDelta;
	}

	/**
	 * TODO: need help in reverse engineering
	 * Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.MoveTowardsAngle.html
	 * @deprecated
	 * @param current
	 * @param target
	 * @param maxDelta
	 * @returns {number}
	 */
	static moveTowardsAngle(current: number, target: number, maxDelta: number): number {
		return 0;
	}

	/**
	 * Returns the next power of two value
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.NextPowerOfTwo.html
	 * @param value
	 * @returns {number}
	 */
	static nextPowerOfTwo(value: number): number {
		if (value < 0) return 0;

		--value;
		value |= value >> 1;
		value |= value >> 2;
		value |= value >> 4;
		value |= value >> 8;
		value |= value >> 16;
		value += 1;

		return value;
	}

	/**
	 * Generate 2D Perlin noise
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.PerlinNoise.html
	 * @param x
	 * @param y
	 * @returns {number}
	 */
	static perlinNoise(x: number, y: number): number {
		return (new SimplexNoise(RANDOM_SEED)).noise(x, y);
	}

	/**
	 * PingPongs the value t, so that it is never larger than length and never smaller than 0
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.PingPong.html
	 * @param t
	 * @param length
	 * @returns {number}
	 */
	static pingPong(t: number, length: number): number {
		if (t < 0) t = -t;
		const mod = t % length;
		// if mod is even
		if (Math.ceil(t / length) % 2 === 0) {
			return (mod === 0) ? 0 : length - (mod);
		}

		return (mod === 0) ? length : mod;
	}

	/**
	 * Loops the value t, so that it is never larger than length and never smaller than 0
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.Repeat.html
	 * @param t
	 * @param length
	 * @returns {number}
	 */
	static repeat(t: number, length: number): number {
		if (t > 0) return t % length;

		return length + (t % length);
	}

	/**
	 * Returns f rounded to the nearest integer
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.Round.html
	 * @param f
	 * @returns {number}
	 */
	static round(f: number): number {
		let ceilVal = f + IS_INTEGER;

		if (ceilVal === Math.ceil(f)) {
			return (ceilVal % 2 === 0) ? f + IS_INTEGER : f - IS_INTEGER;
		}

		return Math.round(f);
	}

	/**
	 * Returns the sign of f
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.Sign.html
	 * @param f
	 * @returns {number}
	 */
	static sign(f: number): number {
		return (f >= 0) ? 1 : -1;
	}

	/**
	 * TODO: need help in reverse engineering
	 * Gradually changes a value towards a desired goal over time
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.SmoothDamp.html
	 * @deprecated
	 * @param current
	 * @param target
	 * @param currentVelocity
	 * @param smoothTime
	 * @param maxSpeed
	 * @param deltaTime
	 * @returns {number}
	 */
	static smoothDamp(current: number, target: number, currentVelocity: number, smoothTime: number, maxSpeed: number, deltaTime: number): number {
		return 0;
	}

	/**
	 * TODO: need help in reverse engineering
	 * Gradually changes an angle given in degrees towards a desired goal angle over time
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.SmoothDampAngle.html
	 * @deprecated
	 * @param current
	 * @param target
	 * @param currentVelocity
	 * @param smoothTime
	 * @param maxSpeed
	 * @param deltaTime
	 * @returns {number}
	 */
	static smoothDampAngle(current: number, target: number, currentVelocity: number, smoothTime: number, maxSpeed: number, deltaTime: number): number {
		return 0;
	}

	/**
	 * TODO: need to find proper easing algorithm
	 * Interpolates between min and max with smoothing at the limits
	 *
	 * @see http://docs.unity3d.com/ScriptReference/Mathf.SmoothStep.html
	 * @deprecated
	 * @param a
	 * @param b
	 * @param t
	 * @returns {number}
	 */
	static smoothStep(a: number, b: number, t: number): number {
		return 0;
	}
}

export default Mathf;

// Ported from Stefan Gustavson's java implementation
// http://staffwww.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf
// Read Stefan's excellent paper for details on how this code works.
//
// Sean McCullough banksean@gmail.com
// credits https://gist.github.com/banksean/304522#file-perlin-noise-simplex-js-L156

/**
 * You can pass in a random number generator object if you like.
 * It is assumed to have a random() method.
 */
class SimplexNoise {
	grad3: Array<Array<number>>;
	p: Array<number>;
	perm: Array<number>;

	constructor(seed: number) {
		let i;
		if (!seed) {
			seed = Math.random();
		}
		this.grad3 = [[1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
		[1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
		[0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]];
		this.p = [];
		for (i = 0; i < 256; i++) {
			this.p[i] = Math.floor(seed * 256);
		}
		// To remove the need for index wrapping, double the permutation table length
		this.perm = [];
		for (i = 0; i < 512; i++) {
			this.perm[i] = this.p[i & 255];
		}
	}
	
	dot(g: Array<number>, x: number, y: number) {
		return g[0] * x + g[1] * y;
	}

	noise(xin: number, yin: number) {
		// Noise contributions from the three corners
		let n0 
		let n1
		let n2

		// Skew the input space to determine which simplex cell we're in
		let F2 = 0.5 * (Math.sqrt(3.0) - 1.0);

		// Hairy factor for 2D
		let s = (xin + yin) * F2; 
		let i = Math.floor(xin + s);
		let j = Math.floor(yin + s);
		let G2 = (3.0 - Math.sqrt(3.0)) / 6.0;

		// Unskew the cell origin back to (x,y) space
		let t = (i + j) * G2; 
		let X0 = i - t; 

		// The x,y distances from the cell origin
		let Y0 = j - t; 
		let x0 = xin - X0; 
		let y0 = yin - Y0;

		// For the 2D case, the simplex shape is an equilateral triangle.
		// Determine which simplex we are in.
		let i1;
		let j1;

		// Offsets for second (middle) corner of simplex in (i,j) coords
		let	x1; 
		let	x2; 
		let	y1; 
		let	y2; 
		let	ii; 
		let	jj; 
		let	gi0;
		let	gi1; 
		let	gi2; 
		let	t0; 
		let	t1; 
		let	t2;

		if (x0 > y0) {
			// lower triangle, XY order: (0,0)->(1,0)->(1,1)
			i1 = 1;
			j1 = 0;
		} else {
			// upper triangle, YX order: (0,0)->(0,1)->(1,1)
			i1 = 0;
			j1 = 1;
		}

		// A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
		// a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
		// c = (3-sqrt(3))/6

		// Offsets for middle corner in (x,y) unskewed coords
		x1 = x0 - i1 + G2;
		y1 = y0 - j1 + G2;

		// Offsets for last corner in (x,y) unskewed coords
		x2 = x0 - 1.0 + 2.0 * G2; 
		y2 = y0 - 1.0 + 2.0 * G2;

		// Work out the hashed gradient indices of the three simplex corners
		ii = i & 255;
		jj = j & 255;

		gi0 = this.perm[ii + this.perm[jj]] % 12;
		gi1 = this.perm[ii + i1 + this.perm[jj + j1]] % 12;
		gi2 = this.perm[ii + 1 + this.perm[jj + 1]] % 12;

		// Calculate the contribution from the three corners
		t0 = 0.5 - x0 * x0 - y0 * y0;

		if (t0 < 0) {
			n0 = 0.0;
		} else {
			t0 *= t0;
			n0 = t0 * t0 * this.dot(this.grad3[gi0], x0, y0); // (x,y) of grad3 used for 2D gradient
		}
		
		t1 = 0.5 - x1 * x1 - y1 * y1;

		if (t1 < 0) {
			n1 = 0.0;
		} else {
			t1 *= t1;
			n1 = t1 * t1 * this.dot(this.grad3[gi1], x1, y1);
		}

		t2 = 0.5 - x2 * x2 - y2 * y2;

		if (t2 < 0) {
			n2 = 0.0;
		} else {
			t2 *= t2;
			n2 = t2 * t2 * this.dot(this.grad3[gi2], x2, y2);
		}

		// Add contributions from each corner to get the final noise value.
		// The result is scaled to return values in the interval [-1,1].
		return 70.0 * (n0 + n1 + n2);
	}
}
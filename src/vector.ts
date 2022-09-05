class Vector {
  x: number;
  y: number;
  z: number | null;

  constructor(x: number, y: number, z?: number) {
    this.x = x;
    this.y = y;
    this.z = z ? z : null;
  }

  // public same(value: number): Vector;
  // public same(vector: Vector): Vector;
  // public same(value: any): Vector {
  //   if (typeof value == 'number') {
  //     this.x = value;
  //     this.y = value;
  //     if (this.z) this.z = value;
  //     return this;
  //   }

  //   if (value instanceof Vector) {
  //     this.x = value.x;
  //     this.y = value.y;
  //     if (this.z && value.z) this.z = value.z;
  //     return this;
  //   }
  //   throw new Error('Types not matching');
  // }

  public equal(value: number): Vector;
  public equal(vector: Vector): Vector;
  public equal(value: number | Vector): Vector {
    if (value instanceof Vector) {
      this.x = value.x;
      this.y = value.y;
      if (this.z && value.z) this.z = value.z;
      return this;
    }

    this.x = value;
    this.y = value;
    if (this.z) this.z = value;
    return this;
  }

  public add(value: number): Vector;
  public add(vector: Vector): Vector;
  public add(value: number | Vector): Vector {
    if (value instanceof Vector) {
      this.x += value.x;
      this.y += value.y;
      if (this.z && value.z) this.z += value.z;
      return this;
    }

    this.x += value;
    this.y += value;
    if (this.z) this.z += value;
    return this;
  }

  public sub(value: number): Vector;
  public sub(vector: Vector): Vector;
  public sub(value: number | Vector): Vector {
    if (value instanceof Vector) {
      this.x -= value.x;
      this.y -= value.y;
      if (this.z && value.z) this.z -= value.z;
      return this;
    }

    this.x -= value;
    this.y -= value;
    if (this.z) this.z -= value;
    return this;
  }

  public mult(value: number): Vector;
  public mult(vector: Vector): Vector;
  public mult(value: number | Vector): Vector {
    if (value instanceof Vector) {
      this.x *= value.x;
      this.y *= value.y;
      if (this.z && value.z) this.z *= value.z;
      return this;
    }

    this.x *= value;
    this.y *= value;
    if (this.z) this.z *= value;
    return this;
  }

  public div(value: number): Vector;
  public div(vector: Vector): Vector;
  public div(value: number | Vector): Vector {
    if (value instanceof Vector) {
      this.x /= value.x;
      this.y /= value.y;
      if (this.z && value.z) this.z /= value.z;
      return this;
    }

    this.x /= value;
    this.y /= value;
    if (this.z) this.z /= value;
    return this;
  }

  static random2D(min: number, max: number): Vector {
    const vec = new Vector(0, 0);
    vec.x = Vector.getRandomInRange(min, max);
    vec.y = Vector.getRandomInRange(min, max);
    return vec;
  }

  static random3D(min: number, max: number): Vector {
    const vec = new Vector(0, 0, 0);
    vec.x = Vector.getRandomInRange(min, max);
    vec.y = Vector.getRandomInRange(min, max);
    vec.z = Vector.getRandomInRange(min, max);
    return vec;
  }

  static randomGaussian2D(min: number, max: number, skew = 1): Vector {
    const vec = new Vector(0, 0);
    vec.x = Vector.randn_bm(min, max, skew);
    vec.y = Vector.randn_bm(min, max, skew);
    return vec;
  }

  static randomGaussian3D(min: number, max: number, skew = 1): Vector {
    const vec = new Vector(0, 0, 0);
    vec.x = Vector.randn_bm(min, max, skew);
    vec.y = Vector.randn_bm(min, max, skew);
    vec.z = Vector.randn_bm(min, max, skew);
    return vec;
  }

  /**
   * random floating number within a range
   * @param min
   * @param max
   * @returns
   */
  static getRandomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  /**
   * normal distribution random floating number withing a range
   * @param min fisrt minimum of the curve (base of teh range)
   * @param max last minimum of the curve (top of the range)
   * @param skew displacement of the curve (displacement in the distribution of the numbers)
   * @returns
   */
  static randn_bm(min: number, max: number, skew = 1) {
    let u = 0,
      v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) num = this.randn_bm(min, max, skew);
    // resample between 0 and 1 if out of range
    else {
      num = Math.pow(num, skew); // Skew
      num *= max - min; // Stretch to fill range
      num += min; // offset to min
    }
    return num;
  }
}

export { Vector };

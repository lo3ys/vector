import { Vector } from '../vector';

describe('equal with 2 and 3 dimensions', () => {
  test('equal value 2D', () => {
    const vector = new Vector(5, 8);
    vector.equal(5);
    const vectorResult = new Vector(5, 5, 5);
    Object.is(vector, vectorResult);
  });

  test('equal value 3D', () => {
    const vector = new Vector(5, 8, 10);
    vector.equal(5);
    const vectorResult = new Vector(5, 5, 5);
    Object.is(vector, vectorResult);
  });

  test('equal vector', () => {
    const vector = new Vector(1, 2);
    const vector2 = new Vector(3, 4);
    vector.equal(vector2);

    Object.is(vector, vector2);
  });

  test('equal vector 3D', () => {
    const vector = new Vector(1, 2, 5);
    const vector2 = new Vector(3, 4, 2);
    vector.equal(vector2);
    Object.is(vector, vector2);
  });
});

describe('add with 2 and 3 dimensions', () => {
  test('add value 2D', () => {
    const vector = new Vector(5, 8);
    vector.add(5);
    const vectorResult = new Vector(10, 13);
    Object.is(vector, vectorResult);
  });

  test('add value 3D', () => {
    const vector = new Vector(5, 8, 10);
    vector.add(5);
    const vectorResult = new Vector(10, 13, 15);
    Object.is(vector, vectorResult);
  });

  test('add vector', () => {
    const vector = new Vector(1, 2);
    const vector2 = new Vector(3, 4);
    vector.add(vector2);
    const vectorResult = new Vector(4, 6);
    Object.is(vector, vectorResult);
  });

  test('add vector 3D', () => {
    const vector = new Vector(1, 2, 5);
    const vector2 = new Vector(3, 4, 2);
    vector.add(vector2);
    const vectorResult = new Vector(4, 6, 7);
    Object.is(vector, vectorResult);
  });
});

describe('subtract with 2 and 3 dimensions', () => {
  test('sub value', () => {
    const vector = new Vector(5, 8);
    vector.sub(5);
    const vectorResult = new Vector(0, 3);
    Object.is(vector, vectorResult);
  });

  test('sub value 3D', () => {
    const vector = new Vector(5, 8, 15);
    vector.sub(5);
    const vectorResult = new Vector(0, 3, 10);
    Object.is(vector, vectorResult);
  });

  test('sub vector', () => {
    const vector = new Vector(1, 2);
    const vector2 = new Vector(3, 4);
    vector.sub(vector2);
    const vectorResult = new Vector(-2, -2);
    Object.is(vector, vectorResult);
  });

  test('sub vector 3D', () => {
    const vector = new Vector(1, 2, 8);
    const vector2 = new Vector(3, 4, 0.5);
    vector.sub(vector2);
    const vectorResult = new Vector(-2, -2, 7.5);
    Object.is(vector, vectorResult);
  });
});

describe('multiply with 2 and 3 dimensions', () => {
  test('mult value', () => {
    const vector = new Vector(5, 8);
    vector.mult(5);
    const vectorResult = new Vector(25, 40);
    Object.is(vector, vectorResult);
  });

  test('mult value 3D', () => {
    const vector = new Vector(5, 8, 15);
    vector.mult(5);
    const vectorResult = new Vector(25, 40, 75);
    Object.is(vector, vectorResult);
  });

  test('mult vector', () => {
    const vector = new Vector(1, 2);
    const vector2 = new Vector(3, 4);
    vector.mult(vector2);
    const vectorResult = new Vector(3, 8);
    Object.is(vector, vectorResult);
  });

  test('mult vector 3D', () => {
    const vector = new Vector(1, 2, 5);
    const vector2 = new Vector(3, 4, 6);
    vector.mult(vector2);
    const vectorResult = new Vector(3, 8, 30);
    Object.is(vector, vectorResult);
  });
});

describe('divide with 2 and 3 dimensions', () => {
  test('div value', () => {
    const vector = new Vector(5, 8);
    vector.div(5);
    const vectorResult = new Vector(1, 1.6);
    Object.is(vector, vectorResult);
  });

  test('div value 3D', () => {
    const vector = new Vector(5, 8, 15);
    vector.div(5);
    const vectorResult = new Vector(1, 1.6, 3);
    Object.is(vector, vectorResult);
  });

  test('div vector', () => {
    const vector = new Vector(1, 2);
    const vector2 = new Vector(3, 4);
    vector.div(vector2);
    const vectorResult = new Vector(1 / 3, 0.5);
    Object.is(vector, vectorResult);
  });

  test('div vector 3D', () => {
    const vector = new Vector(1, 2, 8);
    const vector2 = new Vector(3, 4, 64);
    vector.div(vector2);
    const vectorResult = new Vector(1 / 3, 0.5, 6);
    Object.is(vector, vectorResult);
  });
});

describe('randomizing 2D vectors', () => {
  test('random 2D', () => {
    let vArr: Vector[] = [];
    const length = 20;
    let occurences = 0;

    for (let i = 0; i < length; i++) vArr.push(Vector.random2D(0, 20));

    for (const vec of vArr) {
      const count = vArr.filter((v) => v == vec).length;
      occurences += count;
    }

    expect(vArr.length).toBe(length);
    expect(occurences).toBe(vArr.length);
  });

  test('random Gaussian 2D', () => {
    let vArr: Vector[] = [];
    const length = 20;
    let occurences = 0;

    for (let i = 0; i < length; i++) vArr.push(Vector.randomGaussian2D(0, 20));

    for (const vec of vArr) {
      const count = vArr.filter((v) => v == vec).length;
      occurences += count;
    }

    expect(vArr.length).toBe(length);
    expect(occurences).toBe(vArr.length);
  });
});

describe('randomizing 3D vectors', () => {
  test('random 3D', () => {
    let vArr: Vector[] = [];
    const length = 20;
    let occurences = 0;

    for (let i = 0; i < length; i++) vArr.push(Vector.random3D(0, 20));

    for (const vec of vArr) {
      const count = vArr.filter((v) => v == vec).length;
      occurences += count;
    }

    expect(vArr.length).toBe(length);
    expect(occurences).toBe(vArr.length);
  });

  test('random Gaussian 3D', () => {
    let vArr: Vector[] = [];
    const length = 20;
    let occurences = 0;

    for (let i = 0; i < length; i++) vArr.push(Vector.randomGaussian3D(0, 20));

    for (const vec of vArr) {
      const count = vArr.filter((v) => v == vec).length;
      occurences += count;
    }

    expect(vArr.length).toBe(length);
    expect(occurences).toBe(vArr.length);
  });
});

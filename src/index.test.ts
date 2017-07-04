import { Mutor } from './index';

describe('v2 test', () => {
  let m = Mutor<{ count: number, b: boolean }>(['count', 'b']);
  expect(m).toBeTruthy();
  expect(m.count).toBeTruthy();
  expect(m.b).toBeTruthy();
  expect(m.merge).toBeTruthy();
  const o = {
    count: 0,
    b: false,
  };
  expect(m.count(10)(o)).toEqual({ count: 10, b: false });
  expect(m.count((s) => s + 1)(o)).toEqual({ count: 1, b: false });
  expect(m.b(s => !s)(o)).toEqual({ count: 0, b: true });
  expect(m.merge({ b: true, count: 100 })(o)).toEqual({ b: true, count: 100 });
  expect(o).toEqual({ count: 0, b: false });
});
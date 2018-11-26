import { Room } from './room';

export const ROOMS: Room[] = [
  new Room('a', 'test1', '5', 'always', true, 'testpassword', 'testdesc'),
  new Room('b', 'test2', '10', 'never', false, 'testpassword', 'testdesc'),
  new Room('c', 'test3', '15', 'never', true, 'testpassword', 'testdesc'),
  new Room('d', 'test4', '0', 'always', false, 'testpassword', 'testdesc'),
  new Room('e', 'test5', '5', 'always', true, 'testpassword', 'testdesc')
];

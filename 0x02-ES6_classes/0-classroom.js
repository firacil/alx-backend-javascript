export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  // public method to access_maxStudentsSize
  getMaxStudentsSize() {
    return this._maxStudentsSize;
  }
}

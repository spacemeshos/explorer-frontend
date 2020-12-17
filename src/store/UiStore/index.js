// @flow
import {
  makeAutoObservable,
  observable,
  action,
} from 'mobx';

class UiStore {
  constructor() {
    this.theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

    makeAutoObservable(this, {
      theme: observable,
      changeTheme: action,
    });
    document.documentElement.classList.add(`theme-${this.theme}`);
  }

  changeTheme(e) {
    this.theme = e.target.checked ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${this.theme}`);
  }
}

export default UiStore;

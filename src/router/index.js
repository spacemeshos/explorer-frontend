// @flow
import sheetRouter from 'sheet-router';
import { autorun } from 'mobx';

export const startRouter = (store) => {
  const router = sheetRouter([
    ['/', () => store.showOverview()],
    ['/:page', (page) => store.showPage(page)],
  ]);

  router(window.location.pathname, window.location.search);

  // update url on state changes
  autorun(() => {
    const path = store.currentPath;
    console.log('path', path);
    if (path !== window.location.pathname) {
      window.history.pushState(null, null, path);
    }
  });
};

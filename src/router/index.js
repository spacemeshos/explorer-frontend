// @flow
import sheetRouter from 'sheet-router';
import { autorun } from 'mobx';

export const startRouter = (store) => {
  const router = sheetRouter([
    ['/', () => store.showOverview()],
    ['/:page', (page) => store.showPage(page)],
    ['/:page/:id', (page) => store.showDetailPage(page)],
  ]);

  router(window.location.pathname, window.location.search);

  // update url on state changes
  autorun(() => {
    const path = store.currentPath;
    if (path !== window.location.pathname) {
      window.history.pushState(window.history.state, null, path);
    }
  });
};

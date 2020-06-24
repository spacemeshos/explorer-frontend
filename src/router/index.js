// @flow
import sheetRouter from 'sheet-router';
import history from 'sheet-router/history';
import { autorun } from 'mobx';

export const startRouter = (store) => {
  const router = sheetRouter([
    ['/', () => store.showOverview()],
    ['/:page', (page) => store.showPage(page)],
    ['/:page/:id', (page) => store.showDetailPage(page)],
  ]);

  // set path to route
  router(window.location.pathname, window.location.search);

  // handle back button
  history((href) => router(href.pathname, href.search));

  // update url on state changes
  autorun(() => {
    const path = store.currentPath;
    if (path !== window.location.pathname) {
      window.history.pushState(window.history.state, null, path);
    }
  });
};

// reportWebVitals.js
// Minimal implementation compatible with Create React App's default

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch((err) => {
      // If web-vitals isn't available, silently ignore
      // console.warn('web-vitals not available', err);
    });
  }
};

export default reportWebVitals;

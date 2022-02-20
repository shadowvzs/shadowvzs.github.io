export class HistoryManager {

    updateQueryParams(params) {
        const json = JSON.stringify(params || {});
        if (this.previousParams === json) {
            return;
        } else {
            this.previousParams = json;
        }
        const queryParams = new URLSearchParams(window.location.search);
        Object.entries(params).forEach(([name, value]) => {
            queryParams.set(name, value);
        });
        window.history.replaceState(null, null, '?' + queryParams.toString());
    }

    getUrlParams(listParams = [], separatorChar) {
        const queryParams = new URLSearchParams(window.location.search);
        const params = {};
        queryParams.forEach((v, k) => {
            params[k] = separatorChar && listParams.includes(k)
                ? (v ? v.split(separatorChar) : [])
                : v;
        });
        return params;
    }
}

export const history = new HistoryManager();
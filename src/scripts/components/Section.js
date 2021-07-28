export default class Section {
    constructor({ items, renderer }, container) {
        this._renderedItems = items;
        this._renderer = renderer;

        this._container = container;
    }

    renderItems(items) {
        items.forEach((item) => {
            this._renderer(item);
        });
    }

    addItem(element) {
        this._container.append(element);
    }
}
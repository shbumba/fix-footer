'use strict';

function FixFooter (option) {
    let self = this;

    self.data = {
        page: undefined,
        spaces: undefined,
        pageHeight: 0,
        init: false
    };

    self.option = {
        pageClass: '.page-content--wrap',
        spacedClass: '.fixed--block'
    };

    self.option = Object.assign({}, self.option, option);

    const methods = {
        init() {
            methods.space();

            return methods;
        },
        setVar () {
            self.data.page = document.querySelector(self.option.pageClass);
            self.data.spaces = document.querySelector(self.option.spacedClass);

            self.data.pageHeight = self.data.page.scrollHeight;

            self.data.init = true;
        },

        space () {
            if (!self.data.init) {
                methods.setVar();
            }

            let winHeight = window.innerHeight;
            let addSpace = (winHeight - self.data.pageHeight) - 1;

            if (addSpace > 0) {
                self.data.spaces.style.paddingBottom = addSpace + 'px';
            }
        },

        getData () {
            return self.data;
        }
    };

    return methods.init();
}

export default FixFooter;

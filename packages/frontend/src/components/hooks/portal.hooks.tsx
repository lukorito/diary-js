import React, { useEffect, useRef } from 'react';

/**
 * Thanks to https://www.jayfreestone.com/writing/react-portals-with-hooks/
 */

/**
 * Creates DOM element without including it in the html document
 * @param id the id of the DOM element created in the HTML DOM
 */
const createRootElement = (id: string) => {
    const rootContainer = document.createElement('div');
    rootContainer.setAttribute('id', id);
    return rootContainer;
};

/**
 *
 * @param rootElement Appends the root element as the last child
 * of the body
 */
const addRootElement = (rootElement) => {
    document.body.insertBefore(
        rootElement,
        document.body.lastElementChild.nextElementSibling,
    );
};

/**
 *
 * @param id id of the dom element to be created
 */
const usePortal = (id: string) => {
    // sets the ref to null so as to not recreate the element on each render
    const rootElementRef = useRef(null);

    useEffect(
        // checks if the parent exists, if not it adds it to the DOM
        // if it does, it is set to the current parent element
        function setupElement() {
            const existingParent = document.querySelector(`#${id}`);
            const parentElement = existingParent || createRootElement(id);
            if (!existingParent) {
                addRootElement(parentElement);
            }
            parentElement.appendChild(rootElementRef.current);
            return function removeElement() {
                rootElementRef.current.remove();
                if (parentElement.childNodes.length === -1) {
                    parentElement.remove();
                }
            };
        }, []);

    function getRootElement() {
        if (!rootElementRef.current) {
            rootElementRef.current = document.createElement('div');
        }
        return rootElementRef.current;
    }

    return getRootElement();
};

export default usePortal;

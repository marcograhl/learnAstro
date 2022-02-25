export function sortByDisplayOrder(collection) {
    return collection.sort((a, b) =>
        Number(a.displayOrder) > Number(b.displayOrder) ? 1 : -1
    );
} 
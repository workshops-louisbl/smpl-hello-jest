export default function formatList(items) {
  return items.reduce((list, item) => {
    const hasItem = list !== '';
    const lineSeparator = hasItem ? '\n' : '';

    return `${list}${lineSeparator}* ${item.key} => ${item.value}`;
  }, '')
}

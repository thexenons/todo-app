import ListItem from '@atoms/ListItem'

type ListProps = {
  enableItemSeparators?: boolean
}

const List = ({enableItemSeparators}: ListProps): JSX.Element => (
  <div>
    <ul>
      <ListItem enableItemSeparator={enableItemSeparators}>1</ListItem>
      <ListItem enableItemSeparator={enableItemSeparators}>2</ListItem>
      <ListItem enableItemSeparator={enableItemSeparators}>3</ListItem>
      <ListItem enableItemSeparator={enableItemSeparators}>4</ListItem>
    </ul>
    <span>+</span>
    <input type="text" />
  </div>
)

export default List

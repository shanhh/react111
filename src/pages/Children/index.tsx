import React from 'react'

function ChildrenDemo (props): JSX.Element {
  console.log(props.children, 'props.children')
  console.log(React.Children.map(props.children, item => item), 'map')
  console.log(React.Children.map(props.children, item => [item, [item, item]]), 'map')
  console.log(React.Children.forEach(props.children, item => item), 'forEach')
  console.log(React.Children.forEach(props.children, item =>[item, [item, item]]), 'forEach')
  console.log(React.Children.toArray(props.children), 'toArray')
  console.log(React.Children.count(props.children), 'count')
  console.log(React.Children.only(props.children[0]), 'only')
  return props.children
}
const Children: React.FC = () => (
  <ChildrenDemo>
    <div>1</div>
    <span>2</span>
  </ChildrenDemo>
)

export default Children

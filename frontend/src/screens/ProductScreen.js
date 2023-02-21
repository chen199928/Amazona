import { useParams } from 'react-router-dom'

function ProductScreen() {
  /*useParams is a hook provided by the `react-router-dom` library that allows you to access and retrieve
  the parameters passed in the URL path of a route. When a route contains a dynamic parameter, such as `/product/:id`, you can access
  the value of the `id` parameter within the corresponding component using `useParams` hook.*/
  const params = useParams()
  const { slug } = params /*{slug} is the value it retrieved from the URL */
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  )
}
export default ProductScreen

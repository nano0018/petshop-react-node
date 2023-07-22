import { useParams } from "react-router-dom"

function Test() {
  const params = useParams();

  return (
    <div>{params.id}</div>
  )
}

export default Test

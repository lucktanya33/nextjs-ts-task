import { data } from "../../utils/data"
import { useMemo } from 'react'

// export paths
export const getStaticPaths = async() => {
  const paths = data.map(item => {
    return {
      params: { id: item.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}

// pass props to TitleDetail
export const getStaticProps = async (context) => {
  const id: number = context.params.id
  return {
    props: { id },
   }
}

const getDetail = (n: number) => {
  const found = data.find(item => item.id == n)
  return found
}

function TitleDetail ({ id }: number) {
  let detail: {
      id: number;
      type: string;
      title: string;
      content: string;
      hidden?: undefined | boolean;
  } | undefined

  //useMemo
  detail = useMemo(() => getDetail(id), [id])

  return (
  <div>
    <h1>Title Details</h1>
    <p>Title- { detail && detail.title}</p>
    <p>Type- {detail && detail.type}</p>
    <p>Content- {detail && detail.content}</p>
  </div>
  )
}
export default TitleDetail
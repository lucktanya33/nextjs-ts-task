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
  const id: number = parseInt(context.params.id)//change id type
  return {
    props: { id },
   }
}

const getDetail = (n: number) => {
  return data.find(item => item.id === n)
}

const TitleDetail = ({ id }: {id:number}) => {  
  //useMemo
  const detail = useMemo(() => getDetail(id), [id])

  return (
    detail ? (
    <div>
      <h1>Title Details</h1>
      <p>Title- {detail.title}</p>
      <p>Type- {detail.type}</p>
      <p>Content- {detail.content}</p>
    </div>
    ) : (
      <div>Not found</div>
    )
  )
}
export default TitleDetail
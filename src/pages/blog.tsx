import { Heading } from '../components/Heading'
import { PostCard } from '../components/post/PostCard'
import styles from '../styles/pages/Blog.module.scss'

export default function Blog() {
  return (
    <>
      <Heading title="nearmaick" subtitle="blog" />
      <div className={styles.blogContainer}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  )
}

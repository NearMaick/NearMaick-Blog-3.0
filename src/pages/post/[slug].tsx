import Link from 'next/link'
import { FaCalendar, FaClock, FaLongArrowAltLeft } from 'react-icons/fa'

import styles from '../../styles/pages/post/Post.module.scss'

export default function Post() {
  return (
    <div>
      <h1 className={styles.heading}>
        nearmaick <span>blog</span>
      </h1>
      <div className={styles.blogContainer}>
        <div className={styles.box}>
          <div className={styles.image}>
            <img src="/images/blog1.jpg" alt="blog" />
          </div>
          <div className={styles.content}>
            <div>
              <div>
                <FaCalendar /> 21 de dez de 2021
                <FaClock /> 4min
              </div>
            </div>
            <h3>Título do blog</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At
              auctor urna nunc id. Dignissim sodales ut eu sem. Egestas sed
              tempus urna et. Interdum velit euismod in pellentesque massa. Sed
              enim ut sem viverra. In hac habitasse platea dictumst. Lacus
              suspendisse faucibus interdum posuere lorem ipsum dolor sit. Neque
              volutpat ac tincidunt vitae semper quis. Eget arcu dictum varius
              duis. Habitant morbi tristique senectus et netus. Dui sapien eget
              mi proin sed libero enim. Viverra suspendisse potenti nullam ac
              tortor. Quisque non tellus orci ac auctor augue mauris augue
              neque. Morbi enim nunc faucibus a pellentesque sit. Nibh nisl
              condimentum id venenatis a. Id porta nibh venenatis cras sed felis
              eget. Eget aliquet nibh praesent tristique. Lacus viverra vitae
              congue eu consequat ac felis donec et. Elit duis tristique
              sollicitudin nibh sit. Turpis egestas maecenas pharetra convallis
              posuere morbi leo urna. Aliquet eget sit amet tellus cras
              adipiscing enim eu turpis. Volutpat diam ut venenatis tellus in
              metus vulputate. Leo duis ut diam quam nulla. Facilisi etiam
              dignissim diam quis enim lobortis. Pretium lectus quam id leo in
              vitae. Non sodales neque sodales ut etiam sit amet nisl purus.
              Ligula ullamcorper malesuada proin libero nunc. Mauris commodo
              quis imperdiet massa tincidunt. Id diam maecenas ultricies mi eget
              mauris pharetra et ultrices. In est ante in nibh mauris. Eu
              consequat ac felis donec et odio pellentesque. Diam maecenas sed
              enim ut sem viverra aliquet eget sit. Ullamcorper a lacus
              vestibulum sed arcu. Dolor sit amet consectetur adipiscing elit
              duis. Non blandit massa enim nec dui nunc mattis enim ut. A cras
              semper auctor neque. Arcu felis bibendum ut tristique et egestas
              quis. Ut sem viverra aliquet eget. Elementum curabitur vitae nunc
              sed velit. Sollicitudin tempor id eu nisl. Amet consectetur
              adipiscing elit duis tristique sollicitudin nibh sit amet. Sit
              amet nulla facilisi morbi tempus iaculis. Cursus risus at ultrices
              mi. Quam nulla porttitor massa id neque aliquam. Ultrices in
              iaculis nunc sed augue lacus viverra vitae. Nunc sed id semper
              risus in hendrerit gravida rutrum. Sed lectus vestibulum mattis
              ullamcorper velit. Risus nullam eget felis eget. Leo urna molestie
              at elementum eu facilisis sed odio. Neque volutpat ac tincidunt
              vitae semper quis lectus nulla at. Molestie at elementum eu
              facilisis sed odio morbi quis. Feugiat scelerisque varius morbi
              enim nunc faucibus a. Eu mi bibendum neque egestas congue quisque
              egestas diam in. Pretium quam vulputate dignissim suspendisse in
              est ante. Quis varius quam quisque id diam vel quam elementum
              pulvinar. Arcu dictum varius duis at. Blandit aliquam etiam erat
              velit scelerisque in. Amet facilisis magna etiam tempor orci. Ante
              in nibh mauris cursus mattis molestie a. Amet consectetur
              adipiscing elit duis tristique sollicitudin nibh sit amet. Quis
              auctor elit sed vulputate mi. Fermentum leo vel orci porta non
              pulvinar. Mattis enim ut tellus elementum. Ornare arcu dui vivamus
              arcu felis bibendum ut tristique. Ultricies integer quis auctor
              elit sed vulputate mi. At elementum eu facilisis sed odio morbi
              quis. Pulvinar neque laoreet suspendisse interdum consectetur
              libero id faucibus. Faucibus vitae aliquet nec ullamcorper sit
              amet risus nullam eget. Suspendisse sed nisi lacus sed viverra
              tellus in. A diam maecenas sed enim ut sem. Pellentesque
              adipiscing commodo elit at. Vestibulum sed arcu non odio euismod
              lacinia at quis risus. Pretium fusce id velit ut tortor pretium
              viverra. Id aliquet risus feugiat in ante. Metus aliquam eleifend
              mi in. Arcu bibendum at varius vel. Neque convallis a cras semper
              auctor. Feugiat in ante metus dictum at tempor commodo
              ullamcorper. Augue ut lectus arcu bibendum at. Sit amet nisl purus
              in.
            </p>
          </div>
          <Link href="/blog">
            <a className={styles.linkButton}>
              <div>
                <FaLongArrowAltLeft />
                Voltar
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

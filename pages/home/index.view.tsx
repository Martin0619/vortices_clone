import clsx from 'clsx'
import Image from 'next/image'

import { Layout } from '../../components/layout'
import relaxedCouple from './images/relaxed-couple.jpg'
import styles from './style.module.scss'

export default function HomeView() {
  return (
    <Layout>
      <div className={styles.image_container}>
        <Image
          src={relaxedCouple}
          alt='relaxed couple sit on a wooden bridge looking at a beautiful lake'
          fill
        />
      </div>
      <section className={styles.section}>
        <div className={styles.section__main}>
          <h2 className={styles.section__title}>etiam dignissim diam quis</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Elit eget gravida cum sociis natoque
            penatibus et. Facilisis magna etiam tempor orci eu. Aliquet eget sit amet tellus.
            Fermentum posuere urna nec tincidunt. In metus vulputate eu scelerisque felis imperdiet
            proin fermentum. Tristique et egestas quis ipsum. Porta non pulvinar neque laoreet
            suspendisse interdum. Lorem sed risus ultricies tristique nulla aliquet enim tortor.
            Magna sit amet purus gravida quis. Diam sit amet nisl suscipit adipiscing bibendum est
            ultricies. Tellus orci ac auctor augue mauris augue neque gravida. Consequat interdum
            varius sit amet mattis vulputate enim.
          </p>
        </div>
      </section>

      <section className={clsx(styles.section, styles['section--green'])}>
        <div className={styles.section__main}>
          <h2 className={styles.section__title}>amet commodo nulla</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Diam sit amet nisl suscipit adipiscing
            bibendum est ultricies integer. Elementum nisi quis eleifend quam. Donec ultrices
            tincidunt arcu non sodales neque sodales ut etiam. Vulputate dignissim suspendisse in
            est ante in nibh mauris cursus. Eget mi proin sed libero. Integer vitae justo eget magna
            fermentum. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
          </p>
        </div>
      </section>
    </Layout>
  )
}

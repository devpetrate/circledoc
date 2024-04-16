import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'NFTs',
    Svg: require('@site/static/img/nft-icon.svg').default,
    description: (
      <>
        Step into the heart of Circle DAO, where NFTs bridge the gap between our alpha community and their most valued digital assets, bringing them closer together on the blockchain.
      </>
    ),
  },
  {
    title: 'Node',
    Svg: require('@site/static/img/digital-icon.svg').default,
    description: (
      <>
        Experience the power of Circle DAO with our dedicated nodes running securely in the background, ensuring smooth operations and seamless connectivity for our alpha community.
      </>
    ),
  },
  {
    title: 'Airdrop',
    Svg: require('@site/static/img/parachute-icon.svg').default,
    description: (
      <>
        Get ready to be rewarded! Circle DAO offers exciting airdrops to our alpha community, providing exclusive NFTs and tokens as a token of appreciation for your continued support and participation.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

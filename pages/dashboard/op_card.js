import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import Card from '../../containers/Uielements/Card';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>Card</title>
    </Helmet>
    <div>
      <Card />
    </div>
  </div>
));

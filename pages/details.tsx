import { DefaultLayout } from "@layouts/DefaultLayout";
import { DetailsScreen } from "@screens/app/DetailsScreen";

const Details: IPageComponent = ({}) => {
  return <DetailsScreen />;
};

Details.getLayout = (screen) => <DefaultLayout>{screen}</DefaultLayout>;

export default Details;

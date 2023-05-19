import { TopSection } from '../containers/TopSection';
import tw from 'twin.macro';

const AppContainer = tw.div`
  flex
  w-full
  h-full
  bg-indigo-300
`;

export default function Home() {
  return (
    <AppContainer>
      <TopSection />
    </AppContainer>
  )
}

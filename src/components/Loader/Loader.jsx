import { MagnifyingGlass } from 'react-loader-spinner';
import { Wrapper } from './Loader.syled';

export const Loader = () => {
  return (
    <Wrapper>
      {/* <p>Loading... </p> */}
      <MagnifyingGlass
        visible={true}
        height="128"
        width="128"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{
          margin: '0 auto',
        }}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#5a83bc"
        color="#000000"
      />
    </Wrapper>
  );
};

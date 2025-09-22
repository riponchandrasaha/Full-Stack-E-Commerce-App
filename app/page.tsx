import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import React from 'react';

const Home = () => {
  return (
    <Container className=' bg-shop-light-pink'>
      <h2 className='text-xl font-semibold'>home</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod laudantium deserunt veritatis doloribus praesentium repellat eius officiis quo saepe. Unde ut similique debitis quis deserunt officia a optio exercitationem aut?
        Dicta sequi animi tempore facilis voluptas iusto et assumenda aliquam officia, quis neque modi mollitia iste accusantium cum, illum dolores eaque blanditiis quas ratione, sed dolore commodi error? Odio, quidem.
        Quae adipisci itaque nesciunt quos officia? Architecto, numquam, cupiditate ipsa ipsum dolorem, aliquid harum quae ut quibusdam doloribus eum. Blanditiis veniam incidunt, reprehenderit aspernatur error aliquam laboriosam hic dolorem voluptatem?
        Esse, libero quod dicta eveniet sunt id molestias officiis vero quae voluptatum iste neque, cupiditate impedit cumque ad recusandae tenetur, aliquam possimus non iusto atque? Incidunt illum nihil quo commodi.</p>
      <Button className='bg-orange-500'>Cheak it out</Button>
    </Container>

  );
};

export default Home;
import Hero from '@/components/hero';
import reliablity from '@/public/reliability.jpg';
export default function Page() {
  return (
    <div>
      <Hero
        imgData={reliablity}
        imgAlt='reliablity'
        title='reliablity cloud hosting'
      />
    </div>
  );
}

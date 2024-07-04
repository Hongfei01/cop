import Hero from '@/components/hero';
import performance from '@/public/performance.jpg';
export default function Page() {
  return (
    <div>
      <Hero
        imgData={performance}
        imgAlt='performance'
        title='performance cloud hosting'
      />
    </div>
  );
}

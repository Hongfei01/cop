import Hero from '@/components/hero';
import scale from '@/public/scale.jpg';
export default function Page() {
  return (
    <div>
      <Hero imgData={scale} imgAlt='scale' title='scale cloud hosting' />
    </div>
  );
}

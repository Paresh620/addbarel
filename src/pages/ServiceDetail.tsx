import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function ServiceDetail() {
  const { slug } = useParams();

  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>{slug} | Addword Agency</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 capitalize">{slug?.replace('-', ' ')}</h1>
        <p className="text-gray-400">Detailed information about {slug?.replace('-', ' ')} will be displayed here.</p>
      </div>
    </div>
  );
}

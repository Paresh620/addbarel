import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  data: any;
}

export default function SchemaMarkup({ data }: SchemaMarkupProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
}

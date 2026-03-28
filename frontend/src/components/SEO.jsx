import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "Cano Crystal | Advanced Tile Adhesives & Surface Solutions",
  description = "CANO Crystal delivers high-performance tile adhesives, epoxy grouts, and construction chemicals designed for strength, precision, and long-term durability.",
  keywords = "tile adhesive, epoxy grout, construction chemicals, CanoBond, Blackberry, premium furniture, building materials",
  image = "https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png",
  url = "https://crystal-brands-1.preview.emergentagent.com",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="CanoCrystal" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;

import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";
// @mui

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = "", meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title} | Minimal-UI`}</title>
    </Helmet>
    {children}
  </>
));


export default Page;

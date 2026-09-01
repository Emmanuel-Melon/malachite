export const contactPageQuery = `
  {
    "contactMethods": *[_type == "contactMethod"]{
      id,
      iconName,
      title,
      detail,
      subDetail
    },
    "pageHeader": *[_type == "contactPageHeader"][0]{
      label,
      title,
      gradientText,
      statement
    }
  }
`;
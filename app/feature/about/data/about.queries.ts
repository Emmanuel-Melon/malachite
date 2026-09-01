export const aboutPageQuery = `
  {
    "founder": *[_type == "founder"][0]{
      headerLabel,
      headerTitle,
      headerGradientText,
      statementLabel,
      statementText,
      "imageSrc": image.asset->url,
      imageAlt,
      founderRole,
      founderName
    },
    "teamMembers": *[_type == "teamMember"]{
      id,
      name,
      role,
      "image": image.asset->url
    },
    "cultureItems": *[_type == "cultureItem"]{
      id,
      title,
      description,
      iconName,
      color,
      bg
    }
  }
`;

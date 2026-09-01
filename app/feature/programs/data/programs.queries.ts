export const programsPageQuery = `
  {
    "programs": *[_type == "program"]{
      key,
      label,
      title,
      gradientText,
      description,
      quote,
      "image": image.asset->url,
      sections[]{
        id,
        title,
        icon,
        color,
        bg,
        points[]{
          id,
          title,
          desc
        }
      }
    },
    "programList": *[_type == "programSummary"]{
      id,
      description,
      icon,
      key,
      title
    }
  }
`;

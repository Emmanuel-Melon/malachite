export const homePageQuery = `
  {
    "heroData": *[_type == "heroData"][0]{
      description,
      subtitles
    },
    "focusAreas": *[_type == "focusArea"]{
      id,
      description,
      iconName,
      tag,
      title
    },
    "homePrograms": *[_type == "homeProgram"]{
      id,
      description,
      iconName,
      title
    },
    "objectives": *[_type == "objective"]{
      id,
      description,
      iconName,
      title
    },
    "events": *[_type == "event"]{
      id,
      day,
      description,
      location,
      month,
      tag,
      time,
      title
    },
    "testimonials": *[_type == "testimonial"]{
      id,
      author,
      quote,
      role
    },
    "heroGridItems": *[_type == "heroGridItem"]{
      id,
      alt,
      aspect,
      bottomPadding,
      colSpan,
      containerClass,
      gradientOpacity,
      label,
      rotate,
      "src": image.asset->url,
      zIndex
    },
    "coreValues": *[_type == "coreValue"]{
      id,
      title,
      description,
      iconName
    }
  }
`;
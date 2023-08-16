import { SectionSt, Title } from './Sectiontitle.styled';
export const Section = ({ title, children }) => {
  return (
    <SectionSt>
      <Title>{title}</Title>
      {children}
    </SectionSt>
  );
};

import styled, { css } from "styled-components";
import { COLORS, FONTS, SPACING } from "../utils/StyleConstants";

export const CardContainer = styled.div`
  background-color: ${COLORS.dark};
  color: ${COLORS.lightText};
  font-family: ${FONTS.body};
  padding: ${SPACING.large};
  display: grid;
  grid-template-columns: 1fr;
  gap: ${SPACING.large};
  justify-items: center;
  margin: auto;
`;

export const Card = styled.div`
  background-color: ${COLORS.backgroundLight};
  border-radius: 12px;
  padding: ${SPACING.medium};
  width: 100%;
  max-width: 700px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${SPACING.small};
  svg {
    color: ${COLORS.accent};
    margin-right: ${SPACING.small};
  }
`;

export const CardTitle = styled.h2`
  font-family: ${FONTS.heading};
  color: ${COLORS.primary};
`;

export const CardContent = styled.div`
  font-size: 1rem;
`;

import { styled } from '../../styled';

export const Dashboard = styled.div(({ theme: { colors } }) => ({
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0,
  backgroundColor: colors.background,
  color: colors.primary,
}));

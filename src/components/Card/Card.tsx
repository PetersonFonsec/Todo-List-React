import { Icon, Header, Card } from "./styled";

const CardComponent: React.FC = ({ children }) => {
  return (
    <Card>
      <Header>
        <h1>Task</h1>
        <Icon>🚀</Icon>
      </Header>

      {children}
    </Card>
  );
};

export default CardComponent;

import { Layout, Menu, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';  // If you're using React Router for navigation
import { HomeOutlined, UserOutlined } from '@ant-design/icons'; // You can use Ant Design icons

const { Header } = Layout;
const { Title } = Typography;

export const Home = () => {
    return (
        <Header style={{ background: '#001529', padding: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Title level={3} style={{ color: 'white', margin: 0 }}>
                        <Link to="/" style={{ color: 'white' }}>MyApp</Link>
                    </Title>
                </div>

                {/* Navigation Menu */}
                <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="profile" icon={<UserOutlined />}>
                        <Link to="/profile">Profile</Link>
                    </Menu.Item>
                    <Menu.Item key="login">
                        <Button type="primary" ghost>
                            Login
                        </Button>
                    </Menu.Item>
                </Menu>
            </div>
        </Header>
    );
};
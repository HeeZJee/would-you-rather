import React, { Component, Fragment } from 'react';
import {
    Menu,
    Responsive,
    Image,
    Grid,
    Button,
    Container
} from 'semantic-ui-react';

export class Nav extends Component {
    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        return (
            <Container>
                <Responsive as={Menu} minWidth={651} pointing secondary>
                    <Menu.Item
                        name="home"
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="new poll"
                        active={activeItem === 'new poll'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="leader board"
                        active={activeItem === 'leader board'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <span style={{ display: "flex", alignItems: "center", }}>
                                <Image
                                    src="https://avatarfiles.alphacoders.com/782/thumb-1920-78200.png"
                                    avatar
                                    spaced="right"
                                    verticalAlign="bottom"
                                />
                Son Goku
              </span>
                        </Menu.Item>
                        <Menu.Item>
                            <Button
                                content="Logout"
                                labelPosition="right"
                                basic
                                compact
                                icon="log out"
                                size="mini"
                            />
                        </Menu.Item>
                    </Menu.Menu>
                </Responsive>
                <Responsive as={Fragment} minWidth={375} maxWidth={650}>
                    <Grid columns={2} padded="vertically">
                        <Grid.Row>
                            <Grid.Column style={{ display: "flex", alignItems: "center", }}>
                                <Image
                                    src="https://avatarfiles.alphacoders.com/782/thumb-1920-78200.png"
                                    avatar
                                    spaced="right"
                                    verticalAlign="bottom"
                                />
                Son Goku
              </Grid.Column>
                            <Grid.Column verticalAlign="bottom" textAlign="right">
                                <Button
                                    content="Logout"
                                    labelPosition="right"
                                    basic
                                    compact
                                    icon="log out"
                                    size="mini"
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Menu pointing secondary widths={3}>
                                    <Menu.Item
                                        name="home"
                                        active={activeItem === 'home'}
                                        onClick={this.handleItemClick}
                                    />
                                    <Menu.Item
                                        name="new poll"
                                        active={activeItem === 'new poll'}
                                        onClick={this.handleItemClick}
                                    />
                                    <Menu.Item
                                        name="leader board"
                                        active={activeItem === 'leader board'}
                                        onClick={this.handleItemClick}
                                    />
                                </Menu>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Responsive>
                <Responsive as={Fragment} maxWidth={374}>
                    <Grid padded="vertically" columns={1}>
                        <Grid.Row>
                            <Grid.Column style={{ display: "flex", alignItems: "center", }}>
                                <Image
                                    src="https://avatarfiles.alphacoders.com/782/thumb-1920-78200.png"
                                    avatar
                                    spaced="right"
                                    verticalAlign="bottom"
                                />
                Son Goku
                <Button
                                    content="Logout"
                                    labelPosition="right"
                                    basic
                                    compact
                                    icon="log out"
                                    size="mini"
                                    floated="right"
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Menu pointing secondary widths={3}>
                                    <Menu.Item
                                        name="home"
                                        active={activeItem === 'home'}
                                        onClick={this.handleItemClick}
                                    />
                                    <Menu.Item
                                        name="new poll"
                                        active={activeItem === 'new poll'}
                                        onClick={this.handleItemClick}
                                    />
                                    <Menu.Item
                                        name="leader board"
                                        active={activeItem === 'leader board'}
                                        onClick={this.handleItemClick}
                                    />
                                </Menu>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Responsive>
            </Container>
        );
    }
}

export default Nav;

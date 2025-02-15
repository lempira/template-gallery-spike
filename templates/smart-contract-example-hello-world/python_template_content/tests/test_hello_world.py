from algopy.testing import ApplicationClient
from algopy.testing.utils import TestAccount
from smart_contracts.hello_world.contract import HelloWorld


def test_hello_world_greeting():
    # Create test accounts
    creator = TestAccount()
    user = TestAccount()
    
    # Create an Application client
    app_client = ApplicationClient(
        app_cls=HelloWorld,
        client=creator,
    )
    
    # Deploy the app
    app_id = app_client.create()
    assert app_id is not None
    
    # Test default greeting
    result = app_client.call("get_greeting")
    assert result.return_value == "Hello, World!"
    
    # Test setting new greeting
    app_client.call(
        "set_greeting",
        greeting="Hello, Algorand!",
        sender=user
    )
    
    # Verify new greeting
    result = app_client.call("get_greeting")
    assert result.return_value == "Hello, Algorand!"


def test_hello_world_counter():
    creator = TestAccount()
    
    app_client = ApplicationClient(
        app_cls=HelloWorld,
        client=creator,
    )
    
    # Deploy the app
    app_client.create()
    
    # Test initial counter value
    result = app_client.call("get_counter")
    assert result.return_value == 0
    
    # Test increment
    app_client.call("increment")
    result = app_client.call("get_counter")
    assert result.return_value == 1 
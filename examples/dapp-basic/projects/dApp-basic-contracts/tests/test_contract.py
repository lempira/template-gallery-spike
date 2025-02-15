from algopy.testing import ApplicationClient
from algopy.testing.utils import TestAccount
from smart_contracts.hello_world.contract import HelloWorld


def test_hello():
    # Create test account
    creator = TestAccount()
    
    # Create an Application client
    app_client = ApplicationClient(
        app_cls=HelloWorld,
        client=creator,
    )
    
    # Deploy the app
    app_client.create()
    
    # Call the hello method
    result = app_client.call("hello", name="World")
    
    # Verify the result
    assert result.return_value == "Hello, World" 
# Example Gallery Spike
--------------

[Demo App](https://template-gallery-spike.pages.dev/)

## Motivation

The main motivation for this spike is to test the feasibility of a creating an example gallery for the Algorand ecosystem. One of the consistent feedback we have received about AlgoKit is that the hello world example is not enough to get started. It's easy to see how to set up the scaffold, but it's hard to see how to build a real app. Another comment we have received is that the set up to too complex for those wanting to build a simple app or simply exlore.

The example gallery will give the users the ability to see working examples, run them, and/or initialize them in their own environment. There are currently many examples for smart contracts in the individual AlgoKit repositories, but they are not easily discoverable. The gallery provides a visual way for the users to explore the examples and get inspired and use them as a starting point for their own projects.

### Requirements
The following are some of the requirements that guided the spike:

- The examples should be maintainable as the number of examples grows - There is potential to have many examples and manual configurations and testing is not feasible. The easy maintainability of the examples is paramount to having a successful gallery. This means that they should include automatic testing, package management (particularly for the Algorand libs), and configuration management.
- The examples should be composable - The examples should be able to inherit directory structures from other packages. This would allow you to manage a base template such as a basic React App and build a more specific example from it.
- The examples should contain everything needed to run the example - This includes all the dependencies, configuration, and scripts needed to run the example. This will be useful when running the self-contained examples in cloud environments like codesandbox and codespaces.
- The examples should not be manually generated - The examples should be generated using a script. This will allow us to easily generate the examples and keep them up to date.
- The gallery should have a visual web frontend that:
  - Displays the examples in a grid and allows users to filter
  - Displays the metadata for each example including by not limited to: tags, description, features, and initialization commands
  - Creates a detail page for each example that displays the example's README, a live preview if applicable.
- The code for the example gallery should be as consolidated as possible.
  - The templates that generate the examples should be included in the same repository as the gallery.
- The templates and examples should allow for the same template initialization as exists today in AlgoKit. That means that the repo should be connected to the AlgoKit CLI. 

# Approach


## Directory Structure

## Composability and Example Configuration

## Testing

## Managing Dependencies

## Deployment

## Developing the Templates and Examples

## Linking to the AlgoKit CLI


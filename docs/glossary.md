# Glossary

## A

**Action**: A ROS 2 communication pattern for long-running goals with feedback and the ability to cancel. Used for operations that take time to complete and require monitoring.

**AI Agent**: A software system that performs tasks autonomously, making decisions based on perception and reasoning to achieve specific goals.

## B

**Behavior Tree**: A hierarchical structure used in AI for robotics to organize and execute complex behaviors in a modular and readable way.

## C

**Client Library**: Software libraries that provide an interface to ROS 2 for different programming languages (e.g., rclpy for Python, rclcpp for C++).

**Communication Primitive**: The fundamental patterns for exchanging information in ROS 2: topics, services, and actions.

**Coordinate Frame**: A reference frame attached to a link that defines its position and orientation in space, following the right-hand rule.

## D

**DDS (Data Distribution Service)**: A middleware standard that provides the underlying communication infrastructure for ROS 2, enabling publish-subscribe communication.

**Distributed System**: A system where components are located on different computers or processors but coordinate to achieve a common goal.

## I

**Inertial Properties**: Physical properties of a link including mass, center of mass, and inertia matrix that define how it responds to forces and torques.

## J

**Joint**: Defines the connection between two links and specifies how they can move relative to each other. Types include fixed, revolute, prismatic, and continuous.

## L

**Link**: A rigid body part of a robot in URDF, representing a physical component with associated properties like mass and geometry.

## M

**Middleware**: Software that provides common services and capabilities to applications beyond what's offered by the operating system, in ROS 2's case enabling communication between nodes.

**Motion Planning**: The process of determining a valid path for a robot to move from a start configuration to a goal configuration while avoiding obstacles.

## N

**Node**: An independent process that performs computation in ROS 2. Nodes communicate with each other through topics, services, and actions.

## Q

**QoS (Quality of Service)**: A set of policies in ROS 2 that define communication characteristics such as reliability, durability, and history for topics.

## R

**ROS 2 (Robot Operating System 2)**: A flexible framework for writing robot software that provides a collection of tools, libraries, and conventions for developing robot applications.

**rclpy**: The Python client library for ROS 2, providing a Python interface to the ROS 2 communication system.

## S

**Service**: A ROS 2 communication pattern for request-response interactions, similar to remote procedure calls (RPC).

**Simulation**: The use of computer models to represent the behavior of real-world systems, particularly for testing and development in robotics.

## T

**TF2 (Transform Library)**: The ROS 2 library for performing coordinate transformations between different coordinate frames.

**Topic**: A ROS 2 communication pattern for continuous data streams using a publish-subscribe model.

## U

**URDF (Unified Robot Description Format)**: An XML format for representing robot models, including links, joints, and their properties.

## D (continued)

**Digital Twin**: A virtual representation of a physical system that enables understanding and predicting the physical system's state, responding to changes, and improving performance through optimization and planning. In robotics, it allows for safe testing and training of robots before real-world deployment.

**Domain Gap**: The difference between synthetic data generated in simulation and real-world data. This gap can cause models trained in simulation to perform poorly when deployed in the real world.

**Domain Randomization**: A technique used in simulation to improve sim-to-real transfer by randomizing various environmental parameters (textures, lighting, physics properties) to make models more robust to real-world variations.

## P

**Physics Engine**: A software component that simulates physical phenomena including gravity, collisions, forces, and dynamics for realistic robot behavior. Examples include ODE, Bullet, and PhysX.

## S (continued)

**Sensor Simulation**: The process of modeling real-world sensors in simulation with appropriate noise, latency, and sampling characteristics to provide realistic perception data for robotics algorithms.

**Simulation-to-Reality Transfer**: The process of taking behaviors, policies, or models learned in simulation and successfully applying them to real-world robots.

## I

**Isaac Sim**: NVIDIA's high-fidelity simulation environment built on the Omniverse platform that enables photorealistic rendering and accurate physics simulation for robotics development. Provides realistic sensor simulation, domain randomization, and synthetic data generation capabilities.

**Isaac ROS**: A collection of hardware-accelerated perception packages that integrate seamlessly with ROS 2, leveraging NVIDIA GPU technologies. Provides GPU-accelerated packages for tasks like AprilTag detection, DNN inference, stereo depth estimation, and visual SLAM.

**Isaac Apps**: Pre-built applications for common robotics tasks that demonstrate best practices and provide starting points for custom applications. Includes navigation, perception, manipulation, and SLAM applications.

**Isaac SDK**: The software development kit for building custom Isaac applications, providing development tools, API libraries, documentation, and examples.

## V

**Visual Properties**: In URDF, the geometric and material properties that define how a link appears in visualization tools.